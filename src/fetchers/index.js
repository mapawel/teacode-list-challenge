export const fetchContacts = async () => {
  try {
    const response = await fetch(
      'https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json'
    );
    const dataresponse = await response.json();

    return {
      ok: response?.ok,
      data: dataresponse,
    };
  } catch (err) {
    return err;
  }
};
