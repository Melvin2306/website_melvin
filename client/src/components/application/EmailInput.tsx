function Emailinput() {
  return (
        <input
        type="email"
        name="email"
        id="email"
        placeholder="please provide your email, so we can ask further questions"
        minLength={5}
        maxLength={80}
        size={45}
        />
  )
}
export default Emailinput