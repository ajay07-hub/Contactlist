import './index.css'

const ContactItem = props => {
  const {contactDetails} = props
  const {name, mobileNo} = contactDetails


 
  

  return (
   <tr>
      <td className="table-cell name-column">
        <p>{name}</p>
      </td>
      <td className="table-cell mobile-no-column">
        <p className="mobile-no-value">{mobileNo}</p>
        
      </td>
      </tr>
  )
}

export default ContactItem