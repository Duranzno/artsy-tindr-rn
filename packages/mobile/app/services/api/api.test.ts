import { Api } from "./api";

describe('Artsy Connection Testing', () => {
  var api: Api;
  beforeAll(() => {
    api = new Api({
      url: "https://api.artsy.net/api",
      token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IiIsInN1YmplY3RfYXBwbGljYXRpb24iOiI1ZWUxMzM0M2RmMDU0YzAwMGUwNDMyZWYiLCJleHAiOjE1OTUwMDk5ODAsImlhdCI6MTU5NDQwNTE4MCwiYXVkIjoiNWVlMTMzNDNkZjA1NGMwMDBlMDQzMmVmIiwiaXNzIjoiR3Jhdml0eSIsImp0aSI6IjVmMDhiMTNjOGRhNTliMDAwZTMzMzYzNSJ9.muvf0bvSRNof6O0NGGNj9MphVjc2odAcvh7ebKaqIak",
      timeout: 10000000
    });
    api.setup()
  })
  function defTest({ kind }) {
    expect(kind).toBe("ok")
  }
  it("should get artist by id", async () => {
    const MAPPLETHORPE_ID = "4d8b92a24eb68a1b2c000314"
    const r = await api.getArtist(MAPPLETHORPE_ID)
    const { data } = r;
    defTest(r);
    expect(data.id).toBe("4d8b92a24eb68a1b2c000314")
    expect(data.name).toBe("Robert Mapplethorpe")
  })
  it("should get random artworks", async () => {
    const r = await api.getArtworks()
    defTest(r)
  })
})
