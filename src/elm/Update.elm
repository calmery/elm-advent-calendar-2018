module Update exposing (Msg(..), getUserProfile, update)

import Decoder exposing (profileDecoder)
import Http
import Model exposing (Model, Profile)
import Port exposing (error, load)


type Msg
    = ProfileRequest String
    | ProfileResponse (Result Http.Error Model.Profile)


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        ProfileRequest userId ->
            ( model, getUserProfile userId )

        ProfileResponse (Ok profile) ->
            ( Just profile, load () )

        ProfileResponse (Err _) ->
            ( Nothing, error () )


getUserProfile : String -> Cmd Msg
getUserProfile userId =
    let
        url =
            "https://qiita.com/api/v2/users/" ++ userId

        request =
            Http.get url profileDecoder
    in
    Http.send ProfileResponse request
