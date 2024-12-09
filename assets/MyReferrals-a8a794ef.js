import {
  a8 as n,
  a5 as a,
  ab as e,
  ac as o,
  al as c,
  ad as d,
} from "./index-7dc28fc3.js";
import { R as i } from "./ReferralBanner-ab5b9eec.js";
import { g as f } from "./index-22c73b31.js";
import { C as m } from "./chevron-left-4b788cbe.js";
import "./GenerateReferralLinkButton-53a50dfc.js";
const u = () => {
  const r = n(),
    [s, t] = a.useState([]);
  return (
    a.useEffect(() => {
      if (!r.isConnected || !r.address) return;
      (async () => {
        const l = await f(r.address);
        t(l.addresses);
      })();
    }, [r]),
    r
      ? s.length === 0
        ? e.jsx("p", {
            className: "mt-4",
            children: "You haven't referred anyone yet!",
          })
        : e.jsxs("div", {
            className: "space-y-2 mt-4",
            children: [
              s.length === 1 &&
                e.jsx("p", {
                  className: "body2",
                  children: "You have referred 1 person. Keep going!",
                }),
              s.length > 1 &&
                e.jsxs("p", {
                  className: "body2",
                  children: [
                    "You have already referred ",
                    s.length,
                    " people. Keep going!",
                  ],
                }),
            ],
          })
      : null
  );
};
function v() {
  return e.jsxs(o, {
    children: [
      e.jsx(c, {
        to: "/",
        className: "inline-flex",
        children: e.jsxs(d, {
          variant: "outlined",
          className: "mb-4 rounded-full py-2 px-5",
          children: [e.jsx(m, { size: 18 }), "Back to vaults"],
        }),
      }),
      e.jsx(i, { title: "Welcome to the Strong Community!", seeReferrals: !1 }),
      e.jsxs("div", {
        className: "flex w-full mt-10 flex-col md:flex-row gap-4",
        children: [
          e.jsxs("div", {
            className: "flex-1 space-y-4",
            children: [
              e.jsx("h2", { children: "About our referral program" }),
              e.jsx("p", {
                className: "leading-7 font-light",
                children:
                  "Strong's referral program gives a portion of fees collected from referred users to the referrer. Additionally, Droplets can eventually be accumulated as a result of referring users that use Strong products.",
              }),
            ],
          }),
          e.jsxs("div", {
            className:
              "card dark:bg-neutral-800 bg-opacity-10 w-full md:max-w-[500px] px-6 py-5",
            children: [
              e.jsx("h2", { children: "Your Referrals" }),
              e.jsx(u, {}),
            ],
          }),
        ],
      }),
    ],
  });
}
export { v as default };
