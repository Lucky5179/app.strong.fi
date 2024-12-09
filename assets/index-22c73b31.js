import { ai as a } from "./index-7dc28fc3.js";
const t = "https://api.streamprotocol.money",
  i = (e) => `${window.location.origin}/${e}`,
  c = async (e, r) =>
    !!(await a.post(`${t}/referrals/link`, { signature: r, slug: e })).data,
  l = async (e, r) =>
    !!(await a.put(`${t}/referrals/link`, { signature: r, slug: e })).data,
  p = async (e, r, s) =>
    (
      await a.post(`${t}/referrals`, {
        slug: e,
        referredAddress: r,
        signature: s,
      })
    ).data,
  f = async (e) => (await a.get(`${t}/referrals/referred/${e}`)).data,
  g = async (e) => {
    var s;
    return e
      ? (s = (await a.get(`${t}/referrals/link/${e}`)).data) == null
        ? void 0
        : s.slug
      : void 0;
  },
  u = async (e) => (await a.get(`${t}/referrals/link/exists/${e}`)).data;
export { g as a, i as b, u as c, c as d, l as e, f as g, p as r };
