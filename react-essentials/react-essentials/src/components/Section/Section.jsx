export default function Section({children, title, buttons, ButtonContainer = "menu", ...props}) {
  return (
    <section {...props}>
      <h2>{title}</h2>
      <ButtonContainer>
        {buttons}
      </ButtonContainer>
      {children}
    </section>
  );
}