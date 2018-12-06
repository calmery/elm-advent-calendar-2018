module View exposing (view)

import Html exposing (Html, div, img, text)
import Html.Attributes exposing (class, src)
import Html.Events exposing (onClick)
import Model exposing (Model, Profile)
import Update exposing (Msg(..))


view : Model -> Html Msg
view model =
    case model of
        Just profile ->
            viewProfile profile

        Nothing ->
            viewNotFount


viewProfile : Profile -> Html Msg
viewProfile profile =
    div [ class "profile" ]
        [ img [ class "icon", src profile.profile_image_url ]
            []
        , div [ class "id" ]
            [ text <| "@" ++ profile.id ]
        ]


viewNotFount : Html Msg
viewNotFount =
    div [ class "profile" ]
        [ text "Not Found"
        ]
