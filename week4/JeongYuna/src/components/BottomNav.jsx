const BottomNav = ({taps}) => {
  return (
    <nav>
      {
        taps.map( (tap) => (
          <a key={tap.name} className='tap'>
            <img src={`/src/assets/${tap.img}`}/>
            {tap.name}
          </a>
          )
        )
      }
    </nav>
  )
};

export default BottomNav;