package enum

import "strconv"

func _() {
	var x [1]struct{}
	_ = x[OPEN-1]
	_ = x[DOING-2]
	_ = x[CLOSE-3]
}

const _State_name = "OPENDOINGCLOSE"

var _State_index = [...]uint8{0, 4, 9, 14}

func (i State) String() string {
	i -= 1
	if i < 0 || i >= State(len(_State_index)-1) {
		return "State(" + strconv.FormatInt(int64(i+1), 10) + ")"
	}
	return _State_name[_State_index[i]:_State_index[i+1]]
}
