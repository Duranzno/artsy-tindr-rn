import { GeneralApiProblem } from "./api-problem"
import { Artist, Artwork } from "../../structures"

type GeneralOk<T> = { kind: string; data?: T }
export type GetArtistResult = GeneralOk<Artist> | GeneralApiProblem
export type GetArtworksResult = GeneralOk<Artwork[]> | GeneralApiProblem
