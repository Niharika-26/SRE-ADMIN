import "./styles/copyright.css";
import { Fragment} from "react";
import { useTranslation } from "react-i18next";

const Copyright = () => {
    const { t } = useTranslation();

return (<Fragment>
<div className="foot">
    <p className="copyright">{" "}
              {t("fcopyright")}</p>
</div>
</Fragment>
);
}
export default Copyright;