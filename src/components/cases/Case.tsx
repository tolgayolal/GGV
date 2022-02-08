import { FC } from "react";
import { Link } from "react-router-dom";
import { ICase } from "../../interfaces/Cases";
import { toAbsoluteUrl } from "../../util/util";


type Props = {
      data: ICase
}

const Case: FC<Props> = ({ data }) => {
      return <Link to={'/case/'+data.name} className="text-center group max-w-sm">
            <div className="group-hover:-translate-y-3 transition ease-linear duration-200">
                  <img src={toAbsoluteUrl(data.image)} alt="name" />
            </div>
            <div className="space-y-1">
                  <div>
                        <div className="text-white text-lg group-hover:text-orange effect">
                              {data.name}
                        </div>
                  </div>
                  <div>
                        <button className="btn bg-orange font-bold text-light-back py-1 px-5 group-hover:brightness-125">{data.price} €</button>
                  </div>
                  <div>
                        <span className="text-rose text-sm brightness-150 line-through font-bold">{data.oldPrice} €</span>
                  </div>
            </div>
      </Link>;
};

export default Case;
