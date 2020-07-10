import { getApi } from "../api/token"
describe('Gets the Token', () => {
  beforeAll(() => {
    require('dotenv').config()
  })
  it("Gets the dotenv data correctly", () => {
    const { API_URL, CLIENT_ID, CLIENT_SECRET, } = process.env;
    function expectExists(name: string) {
      expect(name).not.toBeUndefined()
      expect(name).not.toBe("")
      expect(name).not.toBeNull()
    }
    expectExists(API_URL)
    expectExists(CLIENT_ID)
    expectExists(CLIENT_SECRET)
  })
  it("Fetches the token", async () => {
    const data = await getApi()
    expect(data).not.toBeNull()
    expect(data).not.toBeUndefined()
    expect(data.token).toBeDefined()
    expect(data.token).not.toBe("")
  })
})

