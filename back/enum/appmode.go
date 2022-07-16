package enum

type AppMode int

// iota: イオタ で自動インクリメント。0スタート。
const (
	LOCAL      AppMode = iota // LOCAL    == 0
	PRODUCTION                // PRODUCTION   == 1
)

// Stringメソッド(fmt.Stringerインターフェース)
// Printlnしたときに、識別intではなく、こちらのStringが表示されるようになる
func (a AppMode) String() string {
	switch a {
	case LOCAL:
		return "Local"
	case PRODUCTION:
		return "Production"
	default:
		panic("No defined Enum.")
	}
}
