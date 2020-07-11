import { ApisauceInstance, create } from "apisauce"
import { getGeneralApiProblem } from "./api-problem"
import { ApiConfig, DEFAULT_API_CONFIG } from "./api-config"
import * as Types from "./api.types"
import { Artwork, Artist } from "../../structures"
function extractData<T>(response) {
  if (!response.ok) {
    const problem = getGeneralApiProblem(response)
    if (problem) return problem
  }
  try {
    const data: T = response!.data!;
    return { kind: "ok", data }
  } catch {
    return { kind: "bad-data" }
  }
}
export class Api {
  apisauce: ApisauceInstance
  config: ApiConfig
  constructor(config: ApiConfig = DEFAULT_API_CONFIG) {
    this.config = config
  }
  setup() {
    this.apisauce = create({
      baseURL: this.config.url,
      timeout: this.config.timeout,
      headers: {
        Accept: "application/json",
        "X-Xapp-Token": this.config.token//||token,

      },
    })
  }
  getArtist = (id: string): Promise<Types.GetArtistResult> => this.apisauce.get<Artist>(`/artists/${id}`).then((v) => extractData<Artist>(v))
  getArtworks = (): Promise<Types.GetArtworksResult> => this.apisauce.get(`/artworks`).then((v) => extractData<Artwork[]>(v))
}
