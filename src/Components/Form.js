import React from "react";
function Form({ title }) {

    return (

        <React.Fragment>
            <div className="card">

                {/*For Aligning text to slightly left */}
                <div className="formtextalign">
                    <h4>{title}</h4>
                    <div className="formfirstlinecontainer">
                        <div>
                            <label htmlFor='PropertyName'>Property Name &#x1F6C8;</label><br /><br />
                            <input type="text" placeholder='Property Name' id="PropertyName" name="PropertyName" />
                        </div>
                        <div>
                            <label htmlFor='PropertyType'>Property Type</label><br /><br />
                            <select id="PropertyType">
                                <option value="" disabled selected>Property Type</option>
                                <option value="Own House">Own House</option>
                                <option value="Rented">Rented</option>
                            </select>

                        </div>
                        <div>
                            <label htmlFor='NumberOfUnits'>Number Of Units</label><br /><br />
                            <select id="NumberOfUnits">
                                <option value="" disabled selected>Number Of Units</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                        <div>
                            <br />
                            <label htmlFor='PropertyAddress'>Property Address</label><br /><br />
                            <textarea id="ProperyAddress" name="PropertyAddress" placeholder="Enter Borrower Name"></textarea>
                        </div>

                        <div>
                            <br />
                            <label htmlFor='FileAttachment'>File Attachment</label><br /><br />
                            {/*<input type="file" id="FileAttachment" />*/}
                            <div className="fileattachmenttext"><span style={{color:"#1882FF"}}>Browse</span> to Attach a file</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="navigationbutton">
                <button className="backbutton">Back</button>
                <button className="continuebutton">Continue</button>
            </div>
        </React.Fragment>
    )
}

export default Form;