
const stringToColour = (str) => {
    let hash = 0;
    str.split('').forEach(char => {
      hash = char.charCodeAt(0) + ((hash << 5) - hash)
    })
    let colour = '#'
    for (let i = 0; i < 3; i++) {
      const value = (hash >> (i * 8)) & 0xff
      colour += value.toString(16).padStart(2, '0')
    }
    return colour
  }

const ProfilePicPlaceholder = ({ name }) => {
    return (
        <div className="rounded-circle text-capitalize d-flex justify-content-center align-items-center" style={{ height: '50px', width: '50px', background: stringToColour(name) }}>{name.charAt(0)}</div>
    );
}

export default ProfilePicPlaceholder;