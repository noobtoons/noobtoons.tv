const mailer = async (e: any) => {
  // @ts-ignore
  const from_name = document.getElementById("name-content").value || "No Name";
  // @ts-ignore
  const message = document.getElementById("mail-content").value;
  const email = "mailto:hello@noobtoons.tv";
  try {
    e.preventDefault();

    if (message.length) {
      await window.emailjs.send(
        "service_7sd5x5o", "template_nibjan9",
        { from_name, message },
        "hTyF3BiMx61_mKf0Q"
      );
      alert("Message sent successfully!");

    } else {
      alert("Please Enter a message!");
    }
  } catch (e: any) {
    alert(e);
    console.log(e);
  }
};

export default mailer; 