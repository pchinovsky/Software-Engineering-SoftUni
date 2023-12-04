function extractEmails(text) {
 
    let regex = /(?<=\s)[a-zA-Z\d]+[\.\-_]?\w+@\w+[\.\-]?\w+[\.\-_]?\w+\.\w+/g
    let mails = text.match(regex).join('\n')

    console.log(mails);
  
}