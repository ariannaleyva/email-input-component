import emails from '../data/emails';

const searchMatchEmails  = (searchCriteria) => new Promise((resolve, reject) => {
    let results;
    
    // Otherwise resolves after 250ms
    setTimeout(() => {
        results =  emails.filter( (value) => value.toLowerCase().includes(searchCriteria.toLowerCase()));
        resolve(results);
     }, 250);

  });

export { searchMatchEmails} ;