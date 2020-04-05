module Messages exposing (Msg(..))

import Browser.Dom exposing (Viewport)
import Json.Decode as Decode


type Msg
    = Start
    | Pause
    | Resume
    | Tick Float
    | UnlockButtons
    | MoveLeft Bool
    | MoveRight Bool
    | Rotate Bool
    | Accelerate Bool
    | Resize Int Int
    | GetViewport Viewport
    | Noop
    | IncomingMessage Decode.Value
