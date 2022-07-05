package enum

import (
	"fmt"
	"io"
)

// enumに使用する型宣言
type State int

// Stateに使用する定数を宣言
const (
	_ State = iota
	OPEN
	DOING
	CLOSE
)

func (state *State) UnmarshalGQL(v interface{}) error {
	enum, ok := v.(string)
	if !ok {
		return fmt.Errorf("state must be strings")
	}

	switch enum {
	case "OPEN":
		*state = OPEN
	case "DOING":
		*state = DOING
	case "CLOSE":
		*state = CLOSE
	}
	return nil
}

func (state State) MarshalGQL(w io.Writer) {
	switch state {
	case OPEN:
		w.Write([]byte(`"OPEN"`))
	case DOING:
		w.Write([]byte(`"DOING"`))
	case CLOSE:
		w.Write([]byte(`"CLOSE"`))
	}
}
