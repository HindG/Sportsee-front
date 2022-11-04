function CustomTooltip({ payload, active })  {

    if (active) {
        return (
          <div className="customtooltip__container">
            <p className="customtooltip__label">{`${payload[0].value}`}kg</p>
            <p className="customtooltip__label">{`${payload[1].value}`}KCal</p>
          </div>
        );
      }
      return null;
}

export default CustomTooltip;
