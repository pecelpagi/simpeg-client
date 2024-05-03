export const uploadImage = async (file) => {
    const formData = new FormData();

    formData.append('file', file);

    const response = await fetch('/api-file-uploader/api/upload-image', {
        method: 'POST',
        body: formData,
        headers: {
            api_key: 'TpHmV7Dx4o6xovN'
        }
    });

    const retval = await response.json();

    if (response.ok) return retval;

    throw retval;
}