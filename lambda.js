
/**
 * Create standard response for API Gateway.
 *
 * @param {Mixed} body
 * @param {Integer} statusCode
 * @return {Object}
 */
const response = (body, statusCode = 200) => ({
    statusCode,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify(body),
});

const genders = [ 'M', 'F' ];

const factors = {
    M: '1.2',
    F: '1.1',
};

exports.handler = async (event) => {

    const { birthday, gender } = JSON.parse(event.body);

    const birthdayDate = new Date(birthday);
    const todayDate = new Date();
    
    const age = (todayDate.getFullYear() - birthdayDate.getFullYear());

    // @todo Need to factor in month AND year ...
    // @todo Group errors into a single response ...
    // @todo Make age range into constants ...
    if (!birthday || (age < 18 || age > 65)) {
        return response({ error: 'You must be between 18 and 65 to calculate a premium.' })
    }

    if (!genders.find(test => test === gender)) {
        return response({ error: 'Invalid gender supplied.', body: event.body });
    }

    // @todo Make factors into constants ...
    const price = Math.round(age * factors[gender] * 100);

    return response({ price });
};
