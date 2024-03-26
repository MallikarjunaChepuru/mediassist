
import "./index.css"

const ThirdComponent = () => {
  return (
    <div className="third-component m-5">
        <h1 className="text-center">What will you Learn in ACCA?</h1>
        <hr/>
        <div className="container">
            <div className="third-card">
                <h1 className="third-heading">knowledge</h1>
                <ul>
                    <li>Bussiness and Technlogy (BT)</li>
                    <li>Management Accounting (MA)</li>
                    <li>Financial Accounting (FA)</li>
                </ul>

                 <div>
                    <h1 className="third-bottom-heading">3 papers</h1>
                 </div>
           
            </div>   




            <div className="third-card">
                <h1 className="third-heading">Skill Level</h1>
                <ul>

                <li>Corporate and Business Law (LW)</li>
                <li>Performance Management (PM)</li>
                <li>Taxation (TX)</li>
                <li>Financial Reporting (FR)</li>
                 <li>Audit and Assurance (AA)</li>
                <li>Financial Management (FM)</li>

                   
                </ul>

                 <div>
                    <h1 className="third-bottom-heading">3 papers</h1>
                 </div>
           
            </div>




            <div className="third-card">
                <h1 className="third-heading">Professional Level</h1>
                <p className='sub-heading'>Compulsory</p>
                    <ul>
                        <li>SBL - Strategic Business Leader</li>
                        <li>SBR - Strategic Business Reporting</li>
                    </ul>
                    <p className='sub-heading'>Two out of the following</p>
                    <ul>
                        <li>Advanced Financial Management (AFM)</li>
                        <li>Advanced Performance Management (APM)</li>
                        <li>Advanced Taxation (ATX)</li>
                        <li>Advanced Audit and Assurance (AAA)</li>
                    </ul>

                 <div>
                    <h1 className="third-bottom-heading">4 papers</h1>
                 </div>
           
            </div>

       
       
       
       
        </div>



    </div>
  )
}

export default ThirdComponent