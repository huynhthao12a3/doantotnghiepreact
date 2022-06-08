import React from 'react';
import PropTypes from 'prop-types';

import DOMPurify from 'dompurify';

SetInnerHtml.propTypes = {

};

// Dùng để đưa text nhận từ ckEditor lên UI - tránh XSS

function SetInnerHtml({ text }) {
    return (
        <span dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(text) }}></span>
    );
}

export default SetInnerHtml;
