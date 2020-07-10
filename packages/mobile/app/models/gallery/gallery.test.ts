import { GalleryModel, Gallery } from "./gallery"

test("can be created", () => {
  const instance: Gallery = GalleryModel.create({})

  expect(instance).toBeTruthy()
})