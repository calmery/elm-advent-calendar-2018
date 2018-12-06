port module Port exposing (error, load, request)


port request : (String -> msg) -> Sub msg


port load : () -> Cmd msg


port error : () -> Cmd msg
