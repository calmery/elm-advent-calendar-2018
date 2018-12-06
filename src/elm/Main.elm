module Main exposing (main)

import Html exposing (Html, div, text)
import Html.Attributes exposing (class)


main : Html msg
main =
    div [ class "message" ] [ text "Hello World" ]
