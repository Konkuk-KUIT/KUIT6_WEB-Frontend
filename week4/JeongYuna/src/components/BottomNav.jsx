const BottomNav = ({taps}) => {
  return (
    <nav>
      {
        taps.map( ({name, img}) => (
          <a key={name} className='tap'>
            <img src={`/src/assets/${img}`} alt={name}/>
            {name}
          </a>
          )
        )
      }
    </nav>
  )
};

export default BottomNav;