import "./style.css";

const Buttons = ({ tasks, hideDones }) => {
    if (tasks.length === 0) {
        return null;
    }

    return (
        <div className="buttons">
            <button className="buttons__section">
                {hideDones ? "Pokaż" : "Ukryj"} ukończone
            </button>
            <button
            className="buttons__section"
            disabled={tasks.every(({ done }) => done )}>
                Ukończ wszystkie
            </button>
        </div>
    )
};

export default Buttons;
