import type { AdminConsoleKey } from '@logto/phrases';
import { conditionalString } from '@silverhand/essentials';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import ArrowDown from '@/assets/icons/arrow-down.svg';
import ArrowUp from '@/assets/icons/arrow-up.svg';
import Tip from '@/assets/icons/tip.svg';
import Card from '@/ds-components/Card';
import DynamicT from '@/ds-components/DynamicT';
import IconButton from '@/ds-components/IconButton';
import { ToggleTip } from '@/ds-components/Tip';
import type { Props as ToggleTipProps } from '@/ds-components/Tip/ToggleTip';
import { formatNumberWithComma } from '@/utils/number';

import * as styles from './Block.module.scss';

type Props = {
  count: number;
  delta?: number;
  title: AdminConsoleKey;
  tip?: ToggleTipProps['content'];
  variant?: 'bordered' | 'default' | 'plain';
};

function Block({ variant = 'default', count, delta, title, tip }: Props) {
  const { t } = useTranslation(undefined, { keyPrefix: 'admin_console' });

  const deltaLabel = delta !== undefined && `${conditionalString(delta >= 0 && '+')}${delta}`;

  return (
    <Card className={classNames(styles.block, styles[variant])}>
      <div className={styles.title}>
        <DynamicT forKey={title} />
        {tip && (
          <ToggleTip anchorClassName={styles.toggleTipButton} content={tip}>
            <IconButton size="small">
              <Tip />
            </IconButton>
          </ToggleTip>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.number}>{formatNumberWithComma(count)}</div>
        {delta !== undefined && (
          <div className={classNames(styles.delta, delta < 0 && styles.down)}>
            <span>({deltaLabel})</span>
            {delta > 0 && <ArrowUp />}
            {delta < 0 && <ArrowDown />}
          </div>
        )}
      </div>
    </Card>
  );
}

export default Block;
