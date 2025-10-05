const BottomNav = ({taps}) => {
  return (
    <nav>
      {
        taps.map( ({name, img}) => (
          <a key={name} className='tap'>
            <img src={`/src/assets/${img}`}/>
            {name}
          </a>
          )
        )
      }
    </nav>
  )
};

export default BottomNav;