import './timeline.css';

const Timeline = () => {
    return (
        <div className='timeline'>
            <div className="timeline-content">
                <h2 className="timeline-maintext">Timeline</h2> 
                <p className='timeline-subtext'>Cupcake danish tiramisu powder soda ginger cake. Dessert carrot <br></br> cake tartsweet marzipan for fruitcake.</p> 
            </div>
            <div className='timeline-partners'>
                <div className='jan-partners-box'>
                    <img src="/images/partners_jan.png" alt="January Partners" className='partner-images'/>
                    <br></br>
                </div>
                <div className='feb-partners-box'>
                    <img src="/images/partners_feb.png" alt="February Partners" className='partner-images'/>
                </div>
                <div className='march-partners-box'>
                    <img src="/images/partners_march.png" alt="March Partners" className='partner-images'/>
                </div>
            </div>
            <div className='timeline-partners'>
                <h7 className='timeline-partners-text'>January</h7> 
                <h7 className='timeline-partners-text'>February</h7> 
                <h7 className='timeline-partners-text'>March</h7> 
            </div>
        </div>
    );
};

export default Timeline