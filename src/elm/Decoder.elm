module Decoder exposing (profileDecoder)

import Json.Decode exposing (Decoder, field, map2, string)
import Model exposing (Profile)


profileDecoder : Decoder Profile
profileDecoder =
    map2 Profile
        (field "id" string)
        (field "profile_image_url" string)
