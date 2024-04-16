import * as resquest from '~/utils/httpResquest';
export const search = async (query, type = 'less') => {
    try {
        const response = await resquest.get('users/search', {
            params: {
                q: query,
                type,
            },
        });
        return response.data;
    } catch (error) {
        console.error(error);
        throw error(error);
    }
};
