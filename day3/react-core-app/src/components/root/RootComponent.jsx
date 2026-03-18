// import ComponentOne from "../2_multi_components/ComponentOne";
// import ComponentTwo from "../2_multi_components/ComponentTwo";


// import ComponentOne from "../3_inline_styles/ComponentOne";
// import ComponentTwo from "../3_inline_styles/ComponentTwo";

// import ComponentOne from "../4_external_css/comp_one/ComponentOne";
// import ComponentTwo from "../4_external_css/comp_two/ComponentTwo";

// import ComponentOne from "../5_local_css/comp_one/ComponentOne";
// import ComponentTwo from "../5_local_css/comp_two/ComponentTwo";

import ComponentWithState from "../6_comp-state/ComponentWithState";

const RootComponent = () => { 
    return (
        <div className="container mt-4">
            {/* <ComponentOne />
            <ComponentTwo /> */}

            <ComponentWithState />
        </div>
    );
}

export default RootComponent;