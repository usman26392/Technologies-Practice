import { useState } from "react";

export default function Tab({tabs}) {
    const [activeTab, setActiveTab] = useState(0);
    // console.log(tabs)
    return (
        <div>
            <div className="tab-buttons">
                {
                    tabs.map((tab, index) => {
                        console.log("map function execute for tabs because tab's component rerendered")
                        return (
                            <button
                                key={index}
                                onClick={() => setActiveTab(index)}
                                className={index === activeTab ? 'active' : ''}
                            >
                                {tab.title}
                            </button>
                        )
                    }
                )
                }
            </div>
            <div className="tab-content">
                {
                    tabs[activeTab].content
                }
            </div>
        </div>
    );
}
