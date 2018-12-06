module Main exposing (main)

import Browser exposing (element)
import Model exposing (Model)
import Port exposing (request)
import Update exposing (Msg(..), getUserProfile, update)
import View exposing (view)


init : String -> ( Model, Cmd Msg )
init userId =
    ( Nothing
    , if userId /= "" then
        getUserProfile userId

      else
        Cmd.none
    )


subscriptions : Model -> Sub Msg
subscriptions _ =
    request ProfileRequest


main : Program String Model Msg
main =
    element
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }
