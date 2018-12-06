module Model exposing (Model, Profile)


type alias Model =
    Maybe Profile


type alias Profile =
    { id : String
    , profile_image_url : String
    }
