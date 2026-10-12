import React from "react";
import UserPage from "../template/UserPage";
import { useI18n } from '../i18n/I18nContext'

const Contact = () => {
    const { t } = useI18n()
    return (
        <UserPage>
            {t('page.contact')}
        </UserPage>
    )
}

export default Contact