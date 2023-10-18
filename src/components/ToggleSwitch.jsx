

const ToggleSwitch = ({ isOn, handleToggle }) => {
  return (
    <div className={`toggle-container ${isOn ? 'active' : ''}`}>
      <label className='toggle-label' htmlFor='toggle-button'>
        <input
          type='checkbox'
          checked={isOn}
          onChange={handleToggle}
          className='toggle-input'
          id='toggle-button'
        />
        <div className='toggle-slider' />
      </label>
    </div>
  );
}

export default ToggleSwitch;
