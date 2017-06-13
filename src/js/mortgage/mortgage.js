/**
 *
 */
import * as moment from "moment";
import payments from "./payments";

export function mortgage(args/*, next*/) {

  // validate: mix between 0 and 1
  // rates.length --2

  const parts = [
    {
      "principal": args.koopsom * args.hypotheekvorm,
      "rate": args.renteAnnuitair,
      // "offset": args.ingangsdatum,
      "type": "annuity"
    },
    {
      "principal": args.koopsom * (1 - args.hypotheekvorm),
      "rate": args.renteLineair,
      // "offset": args.ingangsdatum,
      "type": "linear"
    }
  ];

  parts.forEach(d => {
    d.payments = payments(d.principal, d.rate, Math.round(args.looptijd), d.type);
  });

  return parts;
}

function validateResult(data) {
  return !isNaN(data[0].nett);
}

function paymentDate(offset, index) {
  return (moment().startOf("month").add(offset + index, "M")).toDate();
}

function eigenWoningForfait(args) {
  return args.eigenwoningforfait * args.woz / 12;
}

function taxReturns(args, data) {
  return (1 - args.belasting) * (data[0].interest + data[1].interest);
}

export function mortgageCombined(args, next) {

  const data = mortgage(args).map(d => d.payments);

  const data2 = d3.zip(data[0], data[1]); // lelijk


      // ewff = v * w; // tax * woz value

    // d.tr = (1 - t) * d.i; // tax returns
    // d.v = Math.min(d.c, d.c - d.tr + (ewff / 12));

  // lelijk
  const data3 = data2.map(d => {
    return {
      "id": d[0].id,
      "date": paymentDate(args.ingangsdatum, d[0].id),
      "amortization": d[0].amortization + d[1].amortization,
      "interest": d[0].interest + d[1].interest,
      "principal": d[0].principal + d[1].principal,
      "payment": d[0].payment + d[1].payment,
      "remaining": (d[0].principal + d[1].principal) - (d[0].amortization + d[1].amortization),
      "forfait": eigenWoningForfait(args),
      "taxreturns": -taxReturns(args, d),
      "nett": Math.min(d[0].payment + d[1].payment, d[0].payment + d[1].payment - taxReturns(args, d) + eigenWoningForfait(args))
    };
  });
  // console.log(data3);

  return next(null, validateResult(data3) ? data3 : null);
}
