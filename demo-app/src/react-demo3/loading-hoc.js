import React, { Component } from 'react';



// export const loadingHoc = (OldComponent) => {
//     return class NewCompoment extends Component {
//         render() {

//             if(this.props.contacts && this.props.contacts.length>0) {
//                 return <OldComponent {...this.props} />;
//             }

//             return (
//                 <div>
//                     <h3 className="alert alert-warning text-center">
//                         Loading...
//                     </h3>
//                 </div>
//             )
//         }
//     };
// }

// export const loadingHoc = (OldComponent, prop) => {
//     return (props) => {

//         if (props[prop] && props[prop].length > 0) {
//             return <OldComponent {...props} />;
//         }

//         return (
//             <div>
//                 <h3 className="alert alert-warning text-center">
//                     Please wait... loading {prop} data!
//                 </h3>
//             </div>
//         )
//     }
// }

// export const loadingHoc = (propName) => {
//     // supposed to return a HOC
//     return (OldComponent) => {
//         // supposed to return new component
//         return (props) => {
//             if (props[propName] && props[propName].length > 0) {
//                 return <OldComponent {...props} />;
//             }
//             else {
//                 return <div>
//                     <h3 className="alert alert-warning text-center">
//                         Please wait... loading {propName} data!
//                     </h3>
//                 </div>
//             }
//         }
//     }
// }


// export const yourHoc = (params) => (OldComponent) => NewComponent
// export default yourHoc(a, b, c)(OldComponent);


// export default loadingHoc('contacts')(ContactList);
export const loadingHoc = (propName) => (OldComponent) => (props) => {
    if (props[propName] && props[propName].length > 0) {
        return <OldComponent {...props} />;
    }
    else {
        return <div>
            <h3 className="alert alert-warning text-center">
                Please wait... loading {propName} data!
            </h3>
        </div>
    }
}