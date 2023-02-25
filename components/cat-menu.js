import {listItems,listItems2,listItems3,listItems4,listItems5} from "./consts"



const  Catmenu = () => {

    return(
        <div>

        <div className='fl-all '> 
        <div>
            <div>
            <h3 className='cat-menu-h'>Logo & identity</h3>
            <ul>
          {listItems.map((item) => (
            <li key={item.id} className="cat-menu-links"><a href='#'>{item.text}</a></li>
          ))}
        </ul>
            </div>
        </div>
        <div>
            <div>
            <h3 className='cat-menu-h'>Web - UI/UX design</h3>
            <ul>
          {listItems2.map((item) => (
            <li key={item.id} className="cat-menu-links"><a href='#'>{item.text}</a></li>
          ))}
        </ul>
            </div>
        </div>
        <div>
            <div>
            <h3 className='cat-menu-h'>Clothing & Merchandise</h3>
            <ul>
          {listItems3.map((item) => (
            <li key={item.id} className="cat-menu-links"><a href='#'>{item.text}</a></li>
          ))}
          <h3 className='cat-menu-h'>Art & Illustration</h3>
             {listItems5.map((item) => (
            <li key={item.id} className="cat-menu-links"><a href='#'>{item.text}</a></li>
          ))}
        </ul>
            </div>
        </div>
        <div>
            <div>
            <h3 className='cat-menu-h'>Business & advertising</h3>
            <ul>
          {listItems4.map((item) => (
            <li key={item.id} className="cat-menu-links"><a href='#'>{item.text}</a></li>
          ))}
        </ul>
            </div>
        </div>
     
     
        </div>
        <div className='cat-menu-btn'>
            <button>Others</button>
        </div> 
    </div>
    )
}

export default Catmenu