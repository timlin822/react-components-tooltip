import './Tooltip.css';

const Tooltip=({tooltipIsShow,text})=>{
    return (
        <div className={tooltipIsShow?"tooltip tooltip-show":"tooltip"}>{text}</div>
    );
}

export default Tooltip;