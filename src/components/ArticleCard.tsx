import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

interface ArticleCardProps {
  id: string;
  title: string;
  description: string;
  publishDate: string;
  readTime: string;
  category: string;
}

export const ArticleCard = ({
  id,
  title,
  description,
  publishDate,
  readTime,
  category
}: ArticleCardProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate(`/article/${id}`);
  };

  return (
    <Card className="w-full hover:shadow-gaming hover:border-gaming-cyan/30 transition-all duration-300 group bg-gaming-dark/50 backdrop-blur-sm">
      <CardContent className="p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="flex-1 space-y-3">
            <div className="flex items-center gap-3 flex-wrap">
              <Badge variant="secondary" className="bg-gaming-cyan/20 text-gaming-cyan border-gaming-cyan/30">
                {category}
              </Badge>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {new Date(publishDate).toLocaleDateString()}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {readTime}
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-foreground group-hover:text-gaming-cyan transition-colors duration-300">
              {title}
            </h3>
            
            <p className="text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>
          
          <div className="flex-shrink-0">
            <Button 
              onClick={handleReadMore}
              variant="outline" 
              className="group/btn hover:bg-gaming-cyan/10 hover:border-gaming-cyan hover:text-gaming-cyan"
            >
              {t('articles.readMore')}
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};