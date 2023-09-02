import React from 'react';

export const Button = ({ onClick, children }) => (
  <div style={{ textAlign: 'center' }}>
    <button type="button" className="load-more-button" onClick={onClick}>
      {children}
    </button>
  </div>
);

// export class Button extends Component {
//     render() {
//       return (
//         <button className="load-more-button" onClick={this.props.onClick}>
//           Load more
//         </button>
//       );
//     }
//   }