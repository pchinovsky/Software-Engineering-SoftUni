export const extractErrorMsg = (err) => {
    if (!err || typeof err !== 'object') {
        return 'An unknown error occurred.';
    }

    switch (err.name) {
        case 'ValidationError':
            return getValidationErrorMessage(err);
        case 'CastError':
            return `Invalid value for ${err.path}: ${err.value}`;
        default:
            return err.message || 'An unknown error occurred.';
    }
};

const getValidationErrorMessage = (err) => {
    const errors = Object.values(err.errors);
    if (errors.length > 0) {
        return errors[0].message;
    }
    return 'Validation failed.';
};


