import React, { useState } from "react";

const UserInput = () => {
    const [userInput, setUserInput] = useState({
        initialInvestment: 100000,
        annualInvestment: 1200,
        expextcedReturn: 6,
        duration: 10,
    });
    function handlechange(inputIdentifier, newValue) {
        setUserInput((prevUserInput) => {
            return {
                ...prevUserInput,
                [inputIdentifier]: newValue,
            };
        });
    }
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="">Initial Investment</label>
                    <input
                        type="number"
                        required
                        value={userInput.initialInvestment}
                        onChange={(event) =>
                            handlechange("initialInvestment", event.target.value)
                        }
                    />
                </p>
                <p>
                    <label htmlFor="">Annual Investment</label>
                    <input
                        type="number"
                        required
                        value={userInput.annualInvestment}
                        onChange={(event) =>
                            handlechange("annualInvestment", event.target.value)
                        }
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="">Expected Return</label>
                    <input
                        type="number"
                        required
                        value={userInput.expextcedReturn}
                        onChange={(event) =>
                            handlechange("expextcedReturn", event.target.value)
                        }
                    />
                </p>
                <p>
                    <label htmlFor="">Duration</label>
                    <input
                        type="number"
                        required
                        value={userInput.duration}
                        onChange={(event) => handlechange("duration", event.target.value)}
                    />
                </p>
            </div>
        </section>
    );
};

export default UserInput;
